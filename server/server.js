const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const posts = [
    {
      id: 1,
      topic: 'Staring At The Blank Page Before You',
      imageUrl:
        'https://i.ibb.co/vkHvVxw/priscilla-du-preez-XZ4-HCx-One-Q-unsplash-2.jpg',
      summary: 'Understanding why I get writers block',
    },
  ];
  res.json({
    posts,
  });
});

app.listen(3005, () => {
  console.log('Server started on port 3005');
});
