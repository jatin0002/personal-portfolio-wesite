import MainScreen from "../Components/MainScreen";

import {
  HomeScreen,
  AboutMeScreen,
  ProjectsScreen,
  ContactMeScreen,
} from "../Screens/index";

export default function Home(props) {
  return (
    <>
      <MainScreen resume={props.data.resume}>
        <HomeScreen />
        <AboutMeScreen data={props.data} />
        <ProjectsScreen data={props.data1} />
        <ContactMeScreen />
      </MainScreen>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/profile`);
  const data = await res.json();
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
  const data1 = await res1.json();
  return {
    props: {
      data,
      data1,
    },
  };
}
