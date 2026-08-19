import { Directive, input, output } from "@angular/core";
import { FieldTree, FormSubmitOptions, submit } from "@angular/forms/signals";

@Directive({
  selector: 'form',
  host: {
    '(submit)': 'submit($event)',
  },
})
export class NgFluxForm<TModel> {

  readonly root = input.required<FieldTree<TModel>>();
  readonly options = input<FormSubmitOptions<unknown, TModel>>();
  readonly onSubmit = output<FieldTree<TModel>>();

  protected submit(e: SubmitEvent) {
    e.preventDefault();

    const form = this.root();
    const options = this.options();

    submit(form, {
      action: async (field, detail) => {
        if (options?.action) {
          return await options.action(field, detail);
        } else {
          this.onSubmit.emit(form);
        }
      },

      onInvalid: (field, detail) => {
        const errors = form().errorSummary();
        const first = errors.at(0)?.fieldTree();
        first?.focusBoundControl();

        options?.onInvalid?.(field, detail);
      },
    });
  }

}
