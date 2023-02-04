import { ChatBody } from "./components/ChatBody";
import { ChatFooter } from "./components/ChatFooter";
import { ChatHeader } from "./components/ChatHeader";
import { Challenge04Container, Content } from "./styles";

export default function Challenge04() {
  return (
    <Challenge04Container>
      <Content>
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </Content>
    </Challenge04Container>
  );
}
