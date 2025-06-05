import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

	public class CardNumberTest {

	@Test
	public void testIfNumberIsValid() {
		int[] array = {4, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1, 2}; 
		String returned = "Visa card"; 
		String checked = AtmNumberjs.CardNumber(array); 		assertEquals(checked, returned); 	}
	@Test
	public void testIfNumberIsMasterCard() {
		int[] array = {5, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1, 3}; 
		String returned = "Master card";
		String checked = AtmNumberjs.CardNumber(array);
		assertEquals(checked, returned);
	}
	@Test
	public void testIfNumberIsDiscoverCard() {
		int[] array = {6, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1, 4}; 
		String returned = "Discover";
		String checked = AtmNumberjs.CardNumber(array);
		assertEquals(checked, returned);
	}
	@Test
	public void testIfNumberIsAmericanExpressCard() {
		int[] array = {3, 4, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1}; 
		String returned = "American Express";
		String checked = AtmNumberjs.CardNumber(array);
		assertEquals(checked, returned);
	}
	@Test
	public void testIfNumberIsInvalid() {
		int[] array = {4, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9}; 
		String returned = "Invalid length";
		String checked = AtmNumberjs.CardNumber(array);
		assertEquals(checked, returned);
	}
}