import { NgFlexDialogCommand } from "../interfaces";

type OnClosed<T = any> = (cmd: NgFlexDialogCommand<T>) => void;

export class NgFlexDialogRef<T = any> {

  constructor(
    private readonly onClosed: OnClosed<T>
  ) {}

  readonly close = (value?: T) => this.onClosed({
    name: 'close',
    value,
  });

}
