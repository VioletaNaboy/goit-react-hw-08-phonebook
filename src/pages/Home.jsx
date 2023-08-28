import {Flex } from '@chakra-ui/react'
  
  export default function Home() {
    return (
      <Flex  align="center" justify="center" minHeight='calc(100vh - 50px)'>
        <h1>
          Phonebook welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </Flex>
    );
  }
  