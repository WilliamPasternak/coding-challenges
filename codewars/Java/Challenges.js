----------------------------------------------------------------------
DATE: MM/DD/YY

CHALLENGE NAME:

DESCRIPTION:

PARAMETERS AND RETURN:
- Parameters: [Input name and type]
- Return: [Expected output and type]

EXAMPLES:
- [Input] → [Expected output]
- [Input] → [Expected output]
- [Input] → [Expected output]

SOLUTION:
----------------------------------------------------------------------
DATE: 11/10/26

CHALLENGE NAME: Multiply

DESCRIPTION: This code does not execute properly. Try to figure out why.

PARAMETERS AND RETURN:
- n/a

EXAMPLES:
- n/a

SOLUTION:
public class Multiply {
    public static Double multiply(Double a, Double b) {
        return a * b;
    }
}
// Below was missing a semi colon after return statement
public class Multiply {
    public static Double multiply(Double a, Double b) {
        return a * b
    }
}