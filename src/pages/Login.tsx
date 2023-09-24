import { Button, Center, Flex, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Center paddingY="8em">
        <Heading fontSize="4em">How Mainstream is your Music Taste?</Heading>
      </Center>
      <Flex
        align="center"
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button colorScheme="green" fontSize={25} height="2.5em" width="5em">
          Login
        </Button>
      </Flex>
    </>
  );
};

export default Login;
