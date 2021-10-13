import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Index() {
  const [show, setShow] = useState(false);
  if (process.browser) {
    document.body.style.overflow = show ? "hidden" : "initial";
  }
  return (
    <section className="flex items-center justify-center w-screen h-screen main-background-gradient">
      <Button onClick={() => setShow(!show)} stroke>
        Налоговый вычет
      </Button>
      <Modal onClose={() => setShow(false)} show={show} />
    </section>
  );
}
