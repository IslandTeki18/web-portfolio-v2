import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEVELOPMENT_URL
    : process.env.REACT_APP_SERVER_URL;

export async function createDeveloperFeedback(
  projectId: string,
  title: string,
  description: string
) {
  const userToken = localStorage.getItem("authToken");
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data } = await axios.post(
      `${url}api/projects/${projectId}/feedback`,
      { title, description },
      config
    );
    return data;
  } catch (error) {
    console.error("Error when creating a developer feedback object: ", error);
  }
}
