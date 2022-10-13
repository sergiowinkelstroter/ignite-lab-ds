import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import ReactLogo from "./components/ReactLogo";
import { TextInput } from "./components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";

export const App = () => {
  return (
    <div className="w-[400px] flex flex-col  m-auto mt-16">
      <header className="flex flex-col items-center mb-10">
        <ReactLogo />
        <Heading size="lg">Ignite Lab</Heading>
        <Text size="md" text="400">
          Faça login e comece a usar!
        </Text>
      </header>
      <form>
        <div className="mb-5">
          <Text text="100">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="joao000@example.com" />
          </TextInput.Root>
        </div>
        <div className="mb-4">
          <Text text="100">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="**********" />
          </TextInput.Root>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <Checkbox />
          <Text size="sm" text="200">
            Lembrar de mim por 30 dias
          </Text>
        </div>
        <Button>Entrar na plataforma</Button>
      </form>
    </div>
  );
};
