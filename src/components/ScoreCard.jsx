import {
    Card,
    CardBody,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";

function ScoreCard({ base, stuid, data, clear }) {
    const [debateScore, setDebateScore] = useState(data.DEBATE_SCORE !== undefined ? data.DEBATE_SCORE : '');
    const [grpActScore, setGrpActScore] = useState(data.GROUP_SCORE !== undefined ? data.GROUP_SCORE : '');
    const [stagePerScore, setStagePerScore] = useState(data.STAGE_SCORE !== undefined ? data.STAGE_SCORE : '');
    const [overallScore, setOverallScore] = useState(data.OVERALL_SCORE !== undefined ? data.OVERALL_SCORE : '');
    const [debateOpinion, setDebateOpinion] = useState(data.DEBATE_OPINION !== undefined ? data.DEBATE_OPINION : '');
    const [grpActOpinion, setGrpActOpinion] = useState(data.GROUP_OPINION !== undefined ? data.GROUP_OPINION : '');
    const [stagePerOpinion, setStagePerOpinion] = useState(data.STAGE_OPINION !== undefined ? data.STAGE_OPINION : '');
    const [overallOpinion, setOverallOpinion] = useState(data.OVERALL_OPINION !== undefined ? data.OVERALL_OPINION : '');

    const submitScores = async () => {
        base("Students").update(
            `${stuid}`,
            {
                DEBATE_SCORE: `${debateScore}`,
                GROUP_SCORE: `${grpActScore}`,
                STAGE_SCORE: `${stagePerScore}`,
                OVERALL_SCORE: `${overallScore}`,
                DEBATE_OPINION: `${debateOpinion}`,
                GROUP_OPINION: `${grpActOpinion}`,
                STAGE_OPINION: `${stagePerOpinion}`,
                OVERALL_OPINION: `${overallOpinion}`,
            },
            function (err) {
                if (err) {
                    console.error(err);
                    return;
                } else {
                    clear()
                }
            }
        )
    };

    

    return (
        <Card className="mt-6 w-full">
            <CardBody className="">
                <Typography variant="h5" className="mb-3" color="blue-gray">
                    Scores Submission
                </Typography>
                <div className="flex gap-4 flex-col">
                    <div className="flex flex-col gap-2">
                        <Input
                            type="number"
                            onChange={(e) => {
                                setDebateScore(e.target.value);
                            }}
                            label="Debate Score"
                            value={debateScore}
                        />
                        <Input
                            type="text"
                            onChange={(e) => {
                                setDebateOpinion(e.target.value);
                            }}
                            label="Debate Opinion"
                            value={debateOpinion}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input
                            type="number"
                            onChange={(e) => {
                                setGrpActScore(e.target.value);
                            }}
                            label="Group Activity Score"
                            value={grpActScore}
                        />
                        <Input
                            type="text"
                            onChange={(e) => {
                                setGrpActOpinion(e.target.value);
                            }}
                            label="Group Activity Opinion"
                            value={grpActOpinion}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input
                            type="number"
                            onChange={(e) => {
                                setStagePerScore(e.target.value);
                            }}
                            label="Stage Performance Score"
                            value={stagePerScore}
                        />
                        <Input
                            type="text"
                            onChange={(e) => {
                                setStagePerOpinion(e.target.value);
                            }}
                            label="Stage Performance Opinion"
                            value={stagePerOpinion}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input
                            type="number"
                            onChange={(e) => {
                                setOverallScore(e.target.value);
                            }}
                            label="Overall Score"
                            value={overallScore}
                        />
                        <Input
                            type="text"
                            onChange={(e) => {
                                setOverallOpinion(e.target.value);
                            }}
                            label="Overall Opinion"
                            value={overallOpinion}
                        />
                    </div>
                    <Button
                        className="w-full bg-green-500 mt-2"
                        onClick={() => {
                            submitScores();
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default ScoreCard;
