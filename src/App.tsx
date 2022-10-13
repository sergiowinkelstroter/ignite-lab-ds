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
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>
      <form className="flex flex-col items-stretch">
        <label htmlFor="email" className="flex flex-col gap-2 mb-4">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="joao000@example.com"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2 mb-4">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>
        <div className="mb-4 flex items-center gap-2">
          <Checkbox />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </div>
        <Button>Entrar na plataforma</Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8 mb-8">
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a href="" className="text-gray-400 underline">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
};
