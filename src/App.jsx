import nsslogo from "./assets/nss_logo.png";
import { Button, Input, Spinner } from "@material-tailwind/react";
import Airtable from "airtable";
import backendUrl from "./const/backendUrl";
import { useState } from "react";
import DataCard from "./components/DataCard";
import ScoreCard from "./components/ScoreCard";
import {
  CheckCircleIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/outline";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function App() {
  const [searchText, setSearchText] = useState("");
  const [studentID, setStudentID] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getStudent = async (search) => {
    if (searchText === "") return;
    clearStudentData();
    setAlert(false);
    setSubmitted(false);
    setLoading(true);
    base("Students")
      .select({
        view: "Data",
        filterByFormula: `({CHEST_NO} = '${search}')`,
      })
      .eachPage(
        (record, fetchNextPage) => {
          if (record.length === 0) {
            setAlert(true);
            setLoading(false);
            return;
          }
          setStudentData(record[0].fields);
          setStudentID(record[0].id);
          fetchNextPage();
          setLoading(false);
        },
        function done(err) {
          if (err) {
            console.error(err);
            setLoading(false);
            return;
          }
        }
      );
  };

  const clearStudentData = () => {
    setSearchText("");
    setStudentData([]);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="py-4 flex items-center gap-2">
        <img src={nsslogo} width={60} alt="nss_logo" />
        <div className="">
          <h4 className="text-2xl font-bold">NSS ADMISSION</h4>
          <h5 className="text-1xl font-semibold">Score System</h5>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <Input
          type="text"
          label="Chest No"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <Button
          className="w-full bg-blue-900"
          onClick={() => {
            getStudent(searchText);
          }}
        >
          Search
        </Button>
      </div>
      {loading && <Spinner className="mt-4" />}

      {alert && (
        <p className="text-sm font-semibold my-4 text-gray-700 flex items-center">
          <ArchiveBoxXMarkIcon className="w-6 mx-1" />
          No Data Found
        </p>
      )}
      {submitted && (
        <p className="text-sm font-semibold my-4 text-green-500 flex items-center">
          <CheckCircleIcon className="w-6 mx-1" />
          Submitted Successfully
        </p>
      )}

      {studentData.Name && (
        <>
          <DataCard data={studentData} />
          <ScoreCard
            base={base}
            stuid={studentID}
            data={studentData}
            clear={clearStudentData}
          />
        </>
      )}
    </div>
  );
}

export default App;
