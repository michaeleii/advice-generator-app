import { useState, useEffect } from "react";
interface AdviceData {
  slip: {
    advice: string;
    id: number;
  };
}

export function useAdvice() {
  const [advice, setAdvice] = useState<{
    advice: string;
    id: number;
  }>();
  const [isLoading, setIsLoading] = useState(true);
  async function fetchAdvice() {
    try {
      setIsLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = (await res.json()) as AdviceData;
      return data.slip;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getAdvice() {
    const advice = await fetchAdvice();
    setAdvice(advice);
  }
  useEffect(() => {
    fetchAdvice()
      .then((advice) => setAdvice(advice))
      .catch((err) => console.log(err));
  }, []);
  return { advice, isLoading, getAdvice };
}
