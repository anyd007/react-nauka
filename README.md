1.Stworzyłem komponent App.jsx i Countdown.jsx. 
2. W komponencie Countdown utworzyłem diva który dzięki funkcji props, ma przypisane klucze name i time. Dzięki propTypes, klucze name i time maja przypisany typ danych jako string. Komponent Countdown jest importowany do komponentu App.
3. W App.jsx, tworzę komponent stanu, który zawiera tablicę ‘events:[….,’ z obiektami ‘{id: 0……..}, {id: 1…….}.
Komponent App.jsx jest eksportowany do komponentu index.js (PS: męczę się strasznie ale walczę ).
4. Tworzę w folderze SRC nowy plik App.css i Countdown.css (uff….wreszcie stylowanie)
5. dodałem komponent EditEvent.jsx, w którym zawarłem strukturę HTML trzech inputów i dwóch butonów. Importuję go do App.jsx i wstawiam pod {events}.
6.w komponencie App.jsx, dodałem odczytywanie informacji z pól formularza, dzięki zastosowaniu this w konstruktorze. Utworzyłem funkcję z jednym parametrem. W komponencie EditEvents.jsx w każdym inpucie zastosowałem onChange, gdzie dzięki props przekazałem funkcję z App.jsx. Przy użyciu e.target mogłem odnieść się do konkretnego inputa.
7. przez dodanie biblioteki uniqid, każdy dodany element posiada indywidualnie nadane id, przez co w konsoli nie pojawia się błąd.
8. przez dodanie biblioteki ‘semantic-ul’, pobrałem iknoę ‘times’, przez którą będzie można usuwać wydarzenia



