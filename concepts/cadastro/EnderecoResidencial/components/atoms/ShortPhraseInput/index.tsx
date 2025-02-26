import { Input } from "@/components/ui/input";
import { useEnderecoCobrancaContext } from "@/concepts/cadastro/EnderecoCobranca/contexts/EnderecoCobrancaContext";
import { useEnderecoEntregaContext } from "@/concepts/cadastro/EnderecoEntrega/contexts/EnderecoEntregaContext";
import { useEnderecoResidencialContext } from "@/concepts/cadastro/EnderecoResidencial/contexts/EnderecoResidencialContext";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";

type Props = {
  shortPhrase: string;
  setShortPhrase: Dispatch<SetStateAction<string>>;
};

const ShortPhraseInput: React.FC<Props> = ({ shortPhrase, setShortPhrase }) => {
  const { useEnderecoCobranca, useEnderecoEntrega } =
    useEnderecoResidencialContext();
  const { setShortPhrase: setShortPhraseCobranca } =
    useEnderecoCobrancaContext();
  const { setShortPhrase: setShortPhraseEntrega } = useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novaFrase = e.target.value;
    setShortPhrase(novaFrase);
    if (useEnderecoCobranca) {
      setShortPhraseCobranca(novaFrase);
    }
    if (useEnderecoEntrega) {
      setShortPhraseEntrega(novaFrase);
    }
  };
  return (
    <div>
      <Label className="text-sm">Frase de identificação *</Label>
      <Input
        className="min-w-[881px] max-w-[881px]"
        placeholder="Insira uma frase curta"
        value={shortPhrase}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default ShortPhraseInput;
