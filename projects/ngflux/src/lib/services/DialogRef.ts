import { NgFluxDialogCommand } from "../interfaces";

type OnClosed<T = any> = (cmd: NgFluxDialogCommand<T>) => void;

export class NgFluxDialogRef<T = any> {

  constructor(
    private readonly onClosed: OnClosed<T>
  ) {}

  readonly close = (value?: T) => this.onClosed({
    name: 'close',
    value,
  });

}
