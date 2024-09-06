import LikeButton from './like-button';

function Header(props) {
  return <h1>{props.title ? props.title : `Default Title`}</h1>;
}

export default function HomePage() {
  const names = [
    `John Lennon`,
    `Paul McCartney`,
    `George Harrison`,
    `Ringo Starr`,
  ];

  return (
      <div>
        <Header title="Develop. Preview. Ship."/>

        <ul>
          {
            names.map(name => (
                <li key={name}>{name}</li>
            ))
          }
        </ul>

        <LikeButton/>

      </div>
  );
}
