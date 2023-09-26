
import { Card, CardBody, Typography, Chip } from "@material-tailwind/react"

function DataCard({data}) {
  return (
    <Card className="mt-6 w-full ">
      <CardBody className="flex gap-3 items-center">
        <Typography variant="h6" color="blue-gray" className="">
          {data.Name}
        </Typography>
        <Chip variant="outlined" value={data.DEPARTMENT} />
      </CardBody>
    </Card>
  )
}

export default DataCard