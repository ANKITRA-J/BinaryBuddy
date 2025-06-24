export function decimalToBinary(num: number): string {
  return num.toString(2);
}

export function binaryToDecimal(binary: string): number {
  return parseInt(binary, 2);
}

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function validateBinaryInput(input: string): boolean {
  return /^[01]*$/.test(input);
}

export function validateDecimalInput(input: string): boolean {
  return /^[0-9]*$/.test(input);
}

export interface Question {
  value: string | number;
  answer: string;
  type: 'dec-to-bin' | 'bin-to-dec';
}

export function generateQuestion(mode: 'dec-to-bin' | 'bin-to-dec'): Question {
  if (mode === 'dec-to-bin') {
    const decimal = generateRandomNumber(1, 255);
    return {
      value: decimal,
      answer: decimalToBinary(decimal),
      type: 'dec-to-bin'
    };
  } else {
    const decimal = generateRandomNumber(1, 255);
    const binary = decimalToBinary(decimal);
    return {
      value: binary,
      answer: decimal.toString(),
      type: 'bin-to-dec'
    };
  }
}

export interface Stats {
  correct: number;
  wrong: number;
  accuracy: number;
}

export function calculateAccuracy(correct: number, wrong: number): number {
  const total = correct + wrong;
  return total > 0 ? Math.round((correct / total) * 100) : 100;
}
