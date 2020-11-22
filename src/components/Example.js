import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const friendOptions = [
  {
    key: 'KMC MANIPAL',
    text: 'KMC MANIPAL',
    value: 'KMC MANIPAL',
    image: {
      avatar: true,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTniEVYM7R8jfCzISXu2OmtJ1mC6UA2_OMjhQ&usqp=CAU'
    }
  },
  {
    key: 'KMC MANGLORE',
    text: 'KMC MANGLORE',
    value: 'KMC MANGLORE',
    image: {
      avatar: true,
      src: 'https://www.edufever.com/wp-content/uploads/2020/05/KMC-Mangalore.jpg'
    }
  },
  {
    key: 'MCOPS MANIPAL',
    text: 'MCOPS MANIPAL',
    value: 'MCOPS MANIPAL',
    image: {
      avatar: true,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt9EjEzb7P95nhJ-OjfSsQ0ExrtH7JpV4Fpw&usqp=CAU'
    }
  },
  {
    key: 'MCOPS MANGLORE',
    text: 'MCOPS MANGLORE',
    value: 'MCOPS MANGLORE',
    image: {
      avatar: true,
      src:
        'https://images.collegedunia.com/public/college_data/images/appImage/9680_Untitled.jpg?w=360&h=140&mode=stretch'
    }
  }
];

const Example = props => (
  <Dropdown placeholder="Select Hospital" fluid selection options={friendOptions} onChange={props.handleChange} />
);

export default Example;
