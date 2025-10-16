package work.areanet;

/**
 * メッセージを表すオブジェクト 
 * 
 */
public class Greeting {
	/**
	 * メッセージ文字列
	 */
	private final String message;

	/**
	 * メッセージオブジェクトを構築する
	 *
	 * @param message メッセージ文字列 null以外の文字列
	 */
	public Greeting(String message) {
		assert message != null;
		this.message = message;
	}

	/**
	 * メッセージ文字列を返却する
	 *
	 * @return メッセージ文字列
	 */
	public String getMessage() {
		return this.message;
	}
}
