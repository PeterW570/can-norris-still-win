'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ChampionshipStatusComponent() {
  const verstappenPoints = 331
  const norrisPoints = 279
  const remainingRaces = 6
  const remainingSprints = 3
  const maxPointsPerRace = 26 // 25 for win + 1 for fastest lap
  const maxPointsPerSprint = 8 // Maximum points for sprint race

  const maxRemainingPoints = (remainingRaces * maxPointsPerRace) + (remainingSprints * maxPointsPerSprint)
  const maxNorrisPoints = norrisPoints + maxRemainingPoints
  const canNorrisWin = maxNorrisPoints > verstappenPoints

  const allFirsts = remainingRaces * 25 + remainingSprints * 8
  const allSecond = remainingRaces * 18 + remainingSprints * 7
  const norrisWinsRemaining = norrisPoints + allFirsts
  const verstappenRunnerUpRemaining = verstappenPoints + allSecond
  const norVerOneTwoResultDiff = norrisWinsRemaining - verstappenRunnerUpRemaining

  const result = canNorrisWin
    ? "Yes, Norris can still win the championship!"
    : "No, Norris cannot win the championship anymore."

  const norVerOneTwoResult = norVerOneTwoResultDiff > 0
    ? `Yes, Norris would win the championship by ${Math.abs(norVerOneTwoResultDiff)} points!`
    : `No, Norris would lose the championship by ${Math.abs(norVerOneTwoResultDiff)} points.`

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Can Norris still win the championship?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center align-middle">
            <div>
              <h2 className="text-lg font-semibold">Verstappen</h2>
              <p className="text-3xl font-bold">{verstappenPoints}</p>
              <p className="text-sm text-muted-foreground">points</p>
            </div>
            <div className='mt-auto'>
              <p className="text-2xl font-bold">{Math.abs(norrisPoints - verstappenPoints)}</p>  
              <p className="text-sm text-muted-foreground">difference</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Norris</h2>
              <p className="text-3xl font-bold">{norrisPoints}</p>
              <p className="text-sm text-muted-foreground">points</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold">Remaining Events</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-2xl font-bold">{remainingRaces}</p>
                <p className="text-sm text-muted-foreground">Races</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{remainingSprints}</p>
                <p className="text-sm text-muted-foreground">Sprints</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Max points available: {maxRemainingPoints}
            </p>
          </div>
          <div className="p-4 bg-primary/10 rounded-md">
            <p className="text-primary font-semibold text-center">{result}</p>
          </div>
          <p className='italic text-center'>What if every race is Nor-Ver 1-2 and neither get fastest lap?</p>
          <div className="p-4 bg-primary/10 rounded-md">
            <p className="text-primary font-semibold text-center">{norVerOneTwoResult}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}