// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    users: [
      {
        name: 'buse',
        userPhoto: 'https://ca.slack-edge.com/T1RAYR4G1-U024TSF66FL-1159ddd67f84-512',
        pass: '1234'
      },
      {
        name: 'fatma',
        userPhoto: 'https://ca.slack-edge.com/T1RAYR4G1-U02G3P2LUS1-0e0c9502eb59-512',
        pass: '1234'
      },
      {
        name: 'mehmet',
        userPhoto: 'https://ca.slack-edge.com/T1RAYR4G1-U02MUJT7X46-30f4398238bb-512',
        pass: '1234'
      },
      {
        name: 'mert',
        userPhoto: 'https://ca.slack-edge.com/T1RAYR4G1-U01EDLJ2VTP-80eba010162b-512',
        pass: '1234'
      },
    ]
  })
}
