import { Card, CardBody, Typography,Input, Button } from "@material-tailwind/react"

function ScoreCard() {
  return (
    <Card className="mt-6 w-full">
      <CardBody className="">
        <Typography variant="h5" className="mb-3" color="blue-gray" >
            Score
        </Typography>
        <div className="flex gap-4 flex-col">
        <div className="flex flex-col gap-1">
        <Input type="number" label="Debate Score"  />
        <Input type="text" label="Debate Opinion"  />
        </div>
        <div className="flex flex-col gap-1">
        <Input type="number" label="Group Activity Score"  />
        <Input type="text" label="Group Activity Opinion"  />
        </div>
        <div className="flex flex-col gap-1">
        <Input type="number" label="Stage Perfotmance Score"  />
        <Input type="text" label="Stage Perfotmance Opinion"  />
        </div>
        <div className="flex flex-col gap-1">
        <Input type="number" label="Overall Score"  />
        <Input type="text" label="Opinion"  />
        </div>
      <Button className="w-full bg-green-500 mt-2"  >Submit</Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ScoreCard