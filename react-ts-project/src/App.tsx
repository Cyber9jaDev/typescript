import { useState } from "react";
import Counter from "./components/Counter"
import Heading from "./components/Header"
import Section from "./components/Section";
import List from "./components/List";


function App() {

  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="Hello Typescript" />
      <Section> This is my section </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["item1", "item2", "item3"]} render={(item: string) => <span>{item}</span>} />
    </>
  )

}

export default App
