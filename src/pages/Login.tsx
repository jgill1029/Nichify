import { Button, Center, Flex, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Center paddingY="8rem">
        <Heading fontSize="2.4rem">How Mainstream is your Music Taste?</Heading>
      </Center>
      <Flex
        align="center"
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Button colorScheme="green" size="lg">
          Login
        </Button>
      </Flex>
    </>
  );
};

export default Login;
