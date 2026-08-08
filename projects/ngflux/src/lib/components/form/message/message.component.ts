import { Component, computed, input } from "@angular/core";
import { Field, FieldState } from "@angular/forms/signals";

@Component({
  selector: 'ngf-form-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.scss'],
  imports: [],
  host: {
    '[class.show]': 'show()',
  },
})
export class NgFluxFormMessage {

  readonly field = input.required<Field<any>>();
  readonly pending = input('Please wait...');

  protected readonly fieldState = computed<FieldState<any>>(() => {
    const field = this.field();
    return field();
  });

  protected readonly validate = computed(() => {
    const state = this.fieldState();
    return state.dirty() || state.touched(); // || state.submitting();
  });

  protected readonly show = computed(() => {
    const state = this.fieldState();
    const validate = this.validate();
    return validate && state.invalid();
  });

  protected readonly errorMessage = computed(() => {
    const errors = this.fieldState().errors();
    return errors.at(0)?.message ?? '';
  });

}
