import { apiChallenge09 } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Select from "@radix-ui/react-select";
import getSymbolFromCurrency from "currency-symbol-map";
import { ArrowsLeftRight, CaretDown, CaretUp, Check } from "phosphor-react";
import { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  CurrencyConverterFormContainer,
  CurrencySymbol,
  Form,
  FormGroup,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
} from "./styles";

const CurrencyConverterFormSchema = z.object({
  base: z.string(),
  target: z.string(),
  value: z.string(),
  result: z.string().nullish(),
});

type CurrencyConverterFormData = z.infer<typeof CurrencyConverterFormSchema>;

interface ICurrencyConverterForm {
  codes: Array<Array<string>>;
}

export function CurrencyConverterForm({ codes }: ICurrencyConverterForm) {
  const { register, control, setValue, watch } =
    useForm<CurrencyConverterFormData>({
      resolver: zodResolver(CurrencyConverterFormSchema),
      defaultValues: {
        base: "USD",
        target: "BRL",
        value: "1",
      },
    });

  const [base, value, target, result] = watch([
    "base",
    "value",
    "target",
    "result",
  ]);

  function handleInvertValues() {
    setValue("base", target);
    setValue("value", String(result));
    setValue("target", base);
    setValue("result", value);
  }

  const handleConvert = useCallback(async () => {
    const response = await apiChallenge09.get(
      `/pair/${base}/${target}/${value}`
    );

    setValue(
      "result",
      response.data.conversion_result.toFixed(2).replace(",", ".")
    );
  }, [base, target, value, setValue]);

  useEffect(() => {
    handleConvert();
  }, [handleConvert, base, target, value]);

  return (
    <CurrencyConverterFormContainer>
      <h2>Conversor de moedas</h2>
      <Form>
        <FormGroup>
          <CurrencySymbol>{getSymbolFromCurrency(base)}</CurrencySymbol>
          <input type="number" min="0" {...register("value")} />
          <Controller
            name="base"
            control={control}
            render={({ field }) => {
              return (
                <Select.Root
                  onValueChange={(selected) => {
                    field.onChange(selected);
                  }}
                  value={field.value}
                >
                  <SelectTrigger aria-label="Moedas">
                    <Select.Value />
                    <SelectIcon>
                      <CaretDown size={24} weight="bold" />
                    </SelectIcon>
                  </SelectTrigger>
                  <Select.Portal style={{ zIndex: 9999 }}>
                    <SelectContent>
                      <SelectScrollUpButton>
                        <CaretUp size={24} weight="bold" />
                      </SelectScrollUpButton>
                      <Select.Viewport>
                        <Select.Group>
                          {codes.map((code) => (
                            <SelectItem
                              key={code[0]}
                              value={code[0]}
                              title={code[1]}
                            >
                              <Select.ItemText>{code[0]}</Select.ItemText>
                              <SelectItemIndicator>
                                <Check weight="bold" />
                              </SelectItemIndicator>
                            </SelectItem>
                          ))}
                        </Select.Group>
                      </Select.Viewport>
                      <SelectScrollDownButton>
                        <CaretDown size={24} weight="bold" />
                      </SelectScrollDownButton>
                    </SelectContent>
                  </Select.Portal>
                </Select.Root>
              );
            }}
          />
        </FormGroup>
        <FormGroup icon>
          <ArrowsLeftRight size={24} onClick={() => handleInvertValues()} />
        </FormGroup>
        <FormGroup>
          <CurrencySymbol>{getSymbolFromCurrency(target)}</CurrencySymbol>
          <input type="number" {...register("result")} disabled />
          <Controller
            name="target"
            control={control}
            render={({ field }) => {
              return (
                <Select.Root
                  onValueChange={(selected) => {
                    field.onChange(selected);
                  }}
                  value={field.value}
                >
                  <SelectTrigger aria-label="Moedas">
                    <Select.Value />
                    <SelectIcon>
                      <CaretDown size={24} weight="bold" />
                    </SelectIcon>
                  </SelectTrigger>
                  <Select.Portal style={{ zIndex: 9999 }}>
                    <SelectContent>
                      <SelectScrollUpButton>
                        <CaretUp size={24} weight="bold" />
                      </SelectScrollUpButton>
                      <Select.Viewport>
                        <Select.Group>
                          {codes.map((code) => (
                            <SelectItem
                              key={code[0]}
                              value={code[0]}
                              title={code[1]}
                            >
                              <Select.ItemText>{code[0]}</Select.ItemText>
                              <SelectItemIndicator>
                                <Check weight="bold" />
                              </SelectItemIndicator>
                            </SelectItem>
                          ))}
                        </Select.Group>
                      </Select.Viewport>
                      <SelectScrollDownButton>
                        <CaretDown size={24} weight="bold" />
                      </SelectScrollDownButton>
                    </SelectContent>
                  </Select.Portal>
                </Select.Root>
              );
            }}
          />
        </FormGroup>
      </Form>
    </CurrencyConverterFormContainer>
  );
}
