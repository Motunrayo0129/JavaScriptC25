public class AtmNumberjs {
public static String CardNumber(int[] numbers) {

		int count = 0;
		int[] cardNumbers = new int[numbers.length];
		boolean valid = true;
		String issuer = "";
	for(int num = 0; num < numbers.length; num++) {
			cardNumbers[num] = numbers[num];
				count++;
			}
			if(cardNumbers[0] == 4 && count == 16) {
			issuer = "Visa card";
			valid = true;
			}	
			else if(cardNumbers[0] == 5 && count == 16) {
			issuer = "Master card";
			valid = true;
			}	
			else if(cardNumbers[0] == 6 && count == 16) {
			issuer = "Discover";
			valid = true;
			}
			else if(cardNumbers[0] == 3 && count == 15) {
			issuer = "American Express";
			valid = true;
			}
                        else if(cardNumbers[0] < 3 || cardNumbers[0] > 6 && count == 16 || count == 15) {
                        issuer = "Invalid input. Enter card number from 3 to 6";
			}
			else{
				issuer = "Invalid length";
				}
					
				return issuer;

		}
			
}