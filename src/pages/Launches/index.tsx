import { gql, useQuery } from "@apollo/client";

const GET_LAUNCHES = gql`
  query getLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
const getRandomImg = (imgs) => imgs[Math.floor(Math.random() * imgs.length)];

function Lauches() {
  const { error, loading, data } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 3,
    },
  });
  console.log();
  return error
    ? "Error!"
    : loading
    ? "Loading..."
    : data.launchesPast.map(({ mission_name, details, links }) => (
        <div key={mission_name}>
          <h1>🛰 {mission_name}</h1>
          <p>{details}</p>
          <img src={getRandomImg(links.flickr_images)} width="200" />
        </div>
      ));
}
export default Lauches;
