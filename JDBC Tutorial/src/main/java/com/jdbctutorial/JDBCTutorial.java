package main.java.com.jdbctutorial;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.jdbc.ResultSetMetaData;

//Diese Klasse wird f�r unser Tutorial benutzt
public class JDBCTutorial {

	// In der Variablen conn wird die Verbindung zur Datenbank gespeichert
	Connection conn = null;
	// Die Adresse des Computers, auf der Mysql l�uft
	String host = "localhost";
	// Der Name der Mysql-Datenbank, die wir verwenden wollen
	String database = "universe";
	// Der Benutzername (Standard bei xampp: root)
	String user = "root";
	// Das Passwort des Benutzers (Standard bei xampp: leer)
	String password = "";

	public void connect() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			System.out.println(e);
		}
		try {

			// Versuch des Verbindungsaufbaus
			conn = DriverManager.getConnection("jdbc:mysql://" + host + "/" + database, user, password);
			System.out.println("Erfolgreich verbunden");
		} catch (SQLException ex) {
			// M�glich auftretene Fehler werden hier ausgegeben
			System.err.println("Fehler beim Verbindungsaufbau!");
			System.err.println("SQLException: " + ex.getMessage());
			System.err.println("SQLState: " + ex.getSQLState());
			System.err.println("VendorError: " + ex.getErrorCode());
		}
	}

	// Ein einfaches Beispiel f�r das Verwenden von Statements
	public void statementExample() {
		// Mit der Datenbank verbinden
		connect();

		try {
			Statement st = conn.createStatement();
			// Ausf�hren einer Anfrage, die die Film-ID aller Filme, in deren Titel
			// "Tatort"
			// vorkommt, liefert
			ResultSet rs = st.executeQuery("SELECT * FROM planets");
			while (rs.next()) {
				// Wir iterieren (umgangssprachlich: gehen) �ber jede Zeile der
				// Antwort-Relation

				// Wir rufen das erste Attribut der Zeile ab, welches eine Zeichenkette
				// (englisch: String) ist
				String mid = rs.getString(1);
				// Wir geben das Attribut aus
				System.out.println(mid);
			}

			// Wir schlie�en die Anfrage an die Datenbank, da wir sie nicht weiter
			// verwenden
			// und nur eine
			// begrenze Anzahl Anfragen gleichzeitig offener sein k�nnen.
			st.close();
		} catch (SQLException ex) {
			// M�glich auftretene Fehler werden hier ausgegeben
			System.err.println("SQLException: " + ex.getMessage());
			System.err.println("SQLState: " + ex.getSQLState());
			System.err.println("VendorError: " + ex.getErrorCode());
		}

		try {
			Statement st = conn.createStatement();
			// Ausf�hren einer Anfrage, die die Film-ID aller Filme, in deren Titel
			// "Tatort"
			// vorkommt, liefert
			ResultSet rs = st.executeQuery(
					"SELECT planets.PlanetName, planets.Mass, planets.Size, mission_target.Mission, missions.StartYear, mission_target.ArrivalYear FROM planets JOIN mission_target ON planets.PlanetName = mission_target.Target INNER JOIN missions ON missions.MissionName = mission_target.Mission;");

			System.out.format("+-----------------+-----------------+%n");
			System.out.format("| Attribute       | Value           |%n");
			System.out.format("+-----------------+-----------------+%n");
			while (rs.next()) {
				// Wir iterieren (umgangssprachlich: gehen) �ber jede Zeile der
				// Antwort-Relation
				// Wir rufen das erste Attribut der Zeile ab, welches eine Zeichenkette
				// (englisch: String) ist
				ResultSetMetaData rsmd = (ResultSetMetaData) rs.getMetaData();
				int columnCount = rsmd.getColumnCount();
				for (int i = 1; i <= columnCount; i++) {

					String columnName = rsmd.getColumnName(i);

					String mid = rs.getString(i);
					// Wir geben das Attribut aus

					String leftAlignFormat = "| %-15s | %-15s |%n";

					System.out.format(leftAlignFormat, columnName, mid);

					System.out.format("+-----------------+-----------------+%n");
				}

			}

			// Wir schlie�en die Anfrage an die Datenbank, da wir sie nicht weiter
			// verwenden
			// und nur eine
			// begrenze Anzahl Anfragen gleichzeitig offener sein k�nnen.
			st.close();
		} catch (SQLException ex) {
			// M�glich auftretene Fehler werden hier ausgegeben
			System.err.println("SQLException: " + ex.getMessage());
			System.err.println("SQLState: " + ex.getSQLState());
			System.err.println("VendorError: " + ex.getErrorCode());
		}
	}

	public void preparedStatementExample() {
		// Mit der Datenbank verbinden
		connect();
		while (true) {

			// prompt the user to enter their name
			System.out.print("Geben Sie einen Planeten ein: ");

			// open up standard input
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

			String input = null;

			// Lesen des Titels von der Eingabe
			try {
				input = br.readLine();
			} catch (IOException ioe) {
				System.err.println("Fehler beim Lesen des Titels. Programm beendet sich jetzt.");
				System.exit(1);
			}

			try {
				// Anlegen eines sogenannten "PreparedStatements" - dies ist eine Anfrage, die
				// oft mit nur
				// leicht ver�nderten Parametern abgesendet werden wird. Durch das Anlegen
				// dieser Prepared Statements
				// kann die Datenbank diese Anfragen schneller beantworten. In diesem Fall muss
				// in der Anfrage nur
				// die entsprechende movie_id eingesetzt werden
				PreparedStatement pst = conn
						.prepareStatement("SELECT Mission FROM mission_target " + "WHERE Target = " + "?");

				// Die mid wird nun im PreparedStatement eingesetzt
				pst.setString(1, input);
				// Die Anfrage wird abgeschickt
				ResultSet result = pst.executeQuery();
				while (result.next()) {
					System.out.println("Zm Planeten " + input + " fuehrte die Mission : " + result.getString(1));
				}
				System.out.println("Alle Ergebnisse ausgegeben");
				// Wir schlie�en die Anfragen an die Datenbank, da wir sie nicht weiter
				// verwenden und nur eine
				// begrenze Anzahl Anfragen gleichzeitig offener sein k�nnen.
				pst.close();
			} catch (SQLException ex) {
				// M�glich auftretene Fehler werden hier ausgegeben
				System.err.println("SQLException: " + ex.getMessage());
				System.err.println("SQLState: " + ex.getSQLState());
				System.err.println("VendorError: " + ex.getErrorCode());
			}
		}
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// Ausf�hren der Beispiele
		JDBCTutorial tutorial = new JDBCTutorial();
		// Verbindungstest zur Datenbank
		tutorial.connect();
		// Beispiel f�r eine einfache SQL-Anfrage
		tutorial.statementExample();
		// Beispiel f�r prepared Statements
		tutorial.preparedStatementExample();

	}

}
