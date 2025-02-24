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
  const { setObservations: setObservationsCobranca } =
    useEnderecoCobrancaContext();
  const { setObservations: setObservationsEntrega } =
    useEnderecoEntregaContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novaObservacao = e.target.value;
    setShortPhrase(novaObservacao);
    if (useEnderecoCobranca) {
      setObservationsCobranca(novaObservacao);
    }
    if (useEnderecoEntrega) {
      setObservationsEntrega(novaObservacao);
    }
  };
  return (
    <div>
      <Label className="text-sm">Frase de identificação *</Label>
      <Input
        className="min-w-[541px] max-w-[541px]"
        placeholder="Insira uma frase curta"
        value={shortPhrase}
        onChange={handleChange}
      ></Input>
    </div>
  );
};

export default ShortPhraseInput;
