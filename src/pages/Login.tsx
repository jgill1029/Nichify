import { Center, Flex, Heading } from "@chakra-ui/react";
import LoginButton from "../components/LoginButton";

const Login = () => {
  return (
    <>
      <Center paddingY="8em">
        <Heading textAlign="center" fontSize={{ base: "2em", sm: "4em" }}>
          How Mainstream is your Music Taste?
        </Heading>
      </Center>
      <Flex
        align="center"
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <LoginButton />
      </Flex>
    </>
  );
};

export default Login;
