import React from "react";
import {
  Container,
  Stack,
  Icon,
  Box,
  Image,
  Text,
  Input,
  StackDivider,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiPrinter } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={4}>
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={12} flex="1">
                <Image src={logo} objectFit="contain" />
                <Stack
                  borderRadius="sm"
                  boxShadow="sm"
                  padding={2}
                  backgroundColor="white"
                  maxWidth={600}
                  direction="row"
                  divider={<StackDivider />}
                  alignItems="center"
                  width="100%"
                >
                  <Input variant="unstyled" paddingX={2} />
                  <Icon
                    as={AiOutlineSearch}
                    width={6}
                    height={6}
                    color="gray.400"
                  />
                </Stack>
              </Stack>
              <Stack
                color="blackAlpha.700"
                direction="row"
                alignItems="center"
                spacing={3}
              >
                <Icon width={9} height={9} as={FiPrinter} />
                <Text
                  transition=".2s"
                  _hover={{ color: "secondary.500" }}
                  fontWeight="500"
                  fontSize="lg"
                >
                  Compra tu Point y QR a $189
                </Text>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={12} alignItems="baseline">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Icon
                    as={GoLocation}
                    width={6}
                    height={6}
                    color="blackAlpha.600"
                  />
                  <Stack spacing={0}>
                    <Text
                      color="blackAlpha.600"
                      fontSize="xs"
                      lineHeight="normal"
                    >
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="normal">
                      Buenos Aires 1876
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  fontSize="sm"
                  color="blackAlpha.700"
                  spacing={5}
                >
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                spacing={6}
                fontSize="sm"
                alignItems="center"
              >
                <Text>Crea tu cuenta</Text>
                <Text>Ingresá</Text>
                <Text>Mis compras</Text>
                <Icon as={IoCartOutline} width={6} height={6} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Box>
          <Routes />
        </Box>
      </Container>
    </Stack>
  );
};

export default App;
