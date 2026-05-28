import Text from "./components/text";

export default function App() {

  return (
    <div className="flex flex-col gap-2">
      <Text variant="bold-sm-bold" className="text-pink-base">
        Olá, mundo!
      </Text>

      <Text variant="bold-sm-bold" className="text-green-base">
        Olá, mundo!
      </Text>

      <Text variant="bold-md-bold">
        Olá, mundo!
      </Text>
    </div>
  )
}

