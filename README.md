- Erstellen Sie ZWEI neue Komponenten: UserInput und UserOutput
- UserInput soll ein Eingabeelement enthalten, UserOutput zwei Absätze
- Geben Sie in der App-Komponente mehrere UserOutput-Komponenten aus (beliebige Absatztexte Ihrer Wahl)
- Übergeben Sie einen Benutzernamen (Ihrer Wahl) über Props an UserOutput und zeigen Sie ihn dort an
- Fügen Sie der App-Komponente einen Zustand hinzu (=> den Benutzernamen) und übergeben Sie den Benutzernamen an die UserOutput-Komponente
- Fügen Sie eine Methode zur Manipulation des Zustands hinzu (=> eine Event-Handler-Methode)
- Übergeben Sie die Event-Handler-Methodenreferenz an die UserInput-Komponente und binden Sie sie an das input-change-Ereignis
- Stellen Sie sicher, dass die neue Eingabe des Benutzers den alten Benutzernamen überschreibt, der an UserOutput übergeben wurde
- Fügen Sie eine Zwei-Wege-Bindung zu Ihrer Eingabe (in UserInput) hinzu, um auch den Anfangsbenutzernamen anzuzeigen
- Fügen Sie Ihren Komponenten/Elementen in den Komponenten ein Styling Ihrer Wahl hinzu - sowohl mit Inline-Styles als auch mit Stylesheets