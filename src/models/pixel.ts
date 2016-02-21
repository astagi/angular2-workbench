export class Pixel {
  value: boolean;

  constructor(value: boolean) {
    this.value = value;
  }

  toggle() {
    this.value = !this.value;
  }
}