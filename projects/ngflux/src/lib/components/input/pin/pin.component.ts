import { booleanAttribute, Component, computed, effect, input, InputSignal, InputSignalWithTransform, model, OutputRef, signal, viewChildren } from "@angular/core";
import { FormValueControl } from "@angular/forms/signals";

import { PinInputDirective } from "./pin.directive";


@Component({
  selector: 'ngf-pin-input',
  templateUrl: 'pin.component.html',
  styleUrls: ['pin.component.scss'],
  imports: [
    PinInputDirective,
  ],
  host: {
    '[class.block]': 'block()',
  },
})
export class NgFluxPinInput implements FormValueControl<string> {

  readonly chars = input(4);
  readonly block = input(false, { transform: booleanAttribute });

  readonly value = model<string>('');

  protected readonly values = computed(() => {
    const chars = this.chars(), value = this.value() ?? '';
    return Array.from({ length: chars }, (_, i) => value.charAt(i));
  });

  protected readonly inputs = viewChildren(PinInputDirective);

  protected onKeyDown(e: KeyboardEvent, index: number) {
    const target = e.target as HTMLInputElement;
    const values = Array.from(this.values());

    switch (e.key) {
      case 'Backspace': {
        e.preventDefault();
        values[index] = '';
        this.setFocus(index - 1);
      } break;

      case 'Delete': {
        e.preventDefault();
        values[index] = '';
        this.setFocus(index);
      } break;

      default: {
        if (e.key.length !== 1) return;
        if (e.ctrlKey || e.altKey || e.metaKey) return;

        e.preventDefault();

        const code = e.key.charCodeAt(0);
        if (!this.allowed(code)) return;

        values[index] = e.key;

        this.setFocus(index + 1);
      }
    }

    this.value.set(values.join(''));
  }

  protected onPaste(e: ClipboardEvent, index: number) {
    e.preventDefault();

    const values = Array.from(this.values());

    const data = e.clipboardData?.getData('text/plain');
    if (!data) return;

    let cursor = 0, lastIndex = index;

    for (let i = index; i < values.length; i++) {
      while (cursor < data.length) {
        const ptr = cursor++;

        let code = data.charCodeAt(ptr);
        if (!this.allowed(code)) continue;

        let char = data.charAt(ptr);
        values[i] = char;

        break;
      }

      if (cursor >= data.length) break;

      lastIndex++;
    }

    this.value.set(values.join(''));

    this.setFocus(lastIndex + 1);
  }

  private setFocus(index: number) {
    const maxIndex = this.chars() - 1;

    index = Math.min(maxIndex, Math.max(index, 0));
    const input = this.inputs().at(index);

    input?.elem.focus();
    input?.elem.select();
  }

  private readonly allowed = (code: number) => (
    (code > 47 && code < 58) || // Numeric (0-9)
    (code > 64 && code < 91) || // Uppercase (A-Z)
    (code > 96 && code < 123) // Lowercase (a-z)
  );

  focus(options?: FocusOptions): void {
    const inputs = this.inputs();
    inputs.at(0)?.elem.focus();
  }

}
