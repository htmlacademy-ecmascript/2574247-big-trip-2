const destinations =
  [
    {
      id: '1',
      description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
      name: 'Chamonix',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.0762563005163317',
          description: 'Chamonix parliament building'
        }
      ]
    },
    {
      id: '2',
      description: 'Bangkok is a vibrant metropolis known for its ornate temples, bustling street life.',
      name: 'Bangkok',
      pictures: [
        {
          src: 'https://en.wikipedia.org/wiki/King_Power_Mahanakhon#/media/File:Tha%C3%AFlande_Bangkok_MahaNakhon.jpg',
          description: 'King Power Mahanakhon'
        }
      ]
    },
    {
      id: '3',
      description: 'Istanbul is a vibrant city bridging Europe and Asia.',
      name: 'Istanbul',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.0762563005163317',
          description: 'Istanbul Grand Bazaar'
        }
      ]
    },
    {
      id: '4',
      description: 'Amsterdam is a picturesque city known for its canals.',
      name: 'Amsterdam',
      pictures: []
    }
  ];

export function getDestinations (){
  return destinations;
}
