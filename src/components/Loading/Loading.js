import { Ring } from "react-awesome-spinners";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  margin-top: 3em;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Ring />
    </LoadingWrapper>
  );
};

export default Loading;
