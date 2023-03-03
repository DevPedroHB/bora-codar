import * as Select from "@radix-ui/react-select";
import { ArrowsLeftRight, CaretDown, CaretUp, Check } from "phosphor-react";
import {
  CurrencyConverterFormContainer,
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

export interface ICurrencyConverterForm {
  codes: Array<Array<string>>;
}

export function CurrencyConverterForm({ codes }: ICurrencyConverterForm) {
  return (
    <CurrencyConverterFormContainer>
      <h2>Conversor de moedas</h2>
      <Form>
        <FormGroup>
          <input type="number" />
          <Select.Root defaultValue="USD">
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
                      <SelectItem key={code[0]} value={code[0]} title={code[1]}>
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
        </FormGroup>
        <FormGroup icon>
          <ArrowsLeftRight size={24} />
        </FormGroup>
        <FormGroup>
          <input type="number" />
          <Select.Root defaultValue="USD">
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
                      <SelectItem key={code[0]} value={code[0]} title={code[1]}>
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
        </FormGroup>
      </Form>
    </CurrencyConverterFormContainer>
  );
}
