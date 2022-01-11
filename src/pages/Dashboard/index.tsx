import { useAuth } from "../../providers/Auth";

import { Layout } from "../../styles/layout";
import Container from "./styles";

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <Layout>
      <Container>
        <h1>Dashboard 🦣</h1>
        <p>🧊 Welcome to the Ice Age! 🧊</p>
        <button onClick={logout}>warm me up</button>
      </Container>
    </Layout>
  );
};

export default Dashboard;
