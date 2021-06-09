import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Leonardo Sanches</Text>
                <Text color="gray.300" fontSize="small">
                    sleonardogabriel@gmail.com
                        </Text>
            </Box>

            <Avatar size="md" name="Leonardo Sanches" src="https://github.com/LeonardoGabrielSanches.png" />
        </Flex>
    )
}