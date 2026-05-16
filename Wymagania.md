# Wymagania projektu

## LAB 1

### Konfiguracja środowiska

Utwórz projekt na github.
Utwórz nowy projekt z wykorzystaniem serwera Vite (npm create vite@latest). Możesz też wykorzystać dowolny framework.

### Aplikacja ManageMe - starter

Budujemy aplikację do zarządzania projektami.

- sZrealizuj funkcjonalność CRUD dotyczącą projektu.
- Dane zapisz w localStorage - napisz dedykowaną klasę/zestaw funkcji do komunikacji z api (tymczasowym api będzie localStorage, w przyszłości zamienimy LS na NoSQL w chmurze)

Model projektu: id, nazwa, opis

## LAB 2

### Użytkownik

- zamodeluj klasę zarządzającą zalogowanym użytkownikiem. Na ten moment chcemy mock zalogowanego użytkownika (bez opcji logowania, zakładania konta etc)
- wyświetl imię/nazwisko zalogowanego użytkownika

### Aktywny projekt

- Zrealizuj w aplikacji wybór "aktualnego" projektu. Czyli wybieram projekt, apka go zapamiętuje (api) i do czasu zmiany wszystko co widzę w aplikacji jest związane jedynie z tym projektem.

### Historyjki (funkcjonalności) projektu

- Zrealizuj CRUD do historyjki (funkcjonalności) w projekcie
- Historyjki powinny się zapisywać za pośrednictwem zaprojektowanej poprzednio klasy do komunikacji z api
- Widok listy historyjek powininen dzielić historyjki na aktualnie wykonywane, czekające na wykonanie i zamknięte (lub jedna lista z filtrowaniem)

Model użytkownika: id, imię, nazwisko
Model historyjki: id, nazwa, opis, priorytet (niski/średni/wysoki), projekt, data utworzenia, stan (todo/doing/done), właściciel (id użytkownika)

## LAB 3

### Użytkownicy

- Rozbuduj model użytkownika o rolę. Możliwe role: admin, devops, developer.
- Zamockuj listę użytkowników. Zalogowany pozostaje admin, na liście powinien być jeszcze minimum jeden developer i jeden devops

### Zadania

Zadanie to najmniejsza jednostka projektu. Jest wykonywana przez jedną osobę, jest przypisane do konkretnej historyjki, jest możliwe do zamknięcia.

- Zrealizuj CRUD do zadania.
- Zrealizuj widok szczegółów zadania - dane zadania, przypisana historyjka, data startu, zrealizowane roboczogodziny, przypisana osoba
- Widok szczegółów zadania (lub dodatkowy widok) powinien dostarczać możliwość przypisania osoby do zadania (devops lub developer). Przypisanie osoby automatycznie zmienia stan zadania z "todo" na "doing" oraz uzupełnia datę startu zadania.
- Jeśli historyjka do której jest przypisane zadanie miała stan 'todo' - również zmieniamy jej stan na 'doing'
- Widok szczegółów zadania (lub dodatkowy widok) powinien dostarczać możliwość zmiany stanu zadania na "done". Zmiana stanu automatycznie uzupełnia datę zakończenia zadania.
- Jeśli w historyjce wszystkie zadania są zakończone - zmieniamy jej stan na 'done'
- Zrealizuj widok tablicy kanban z zadaniami (kolumny todo, doing, done)
- Zadania powinny się zapisywać za pośrednictwem mechanizmu komunikacji z api

Model Zadania:

- Nazwa
- Opis
- Priorytet (niski/średni/wysoki)
- Historyjka do której przynależy zadanie
- Przewidywany czas wykonania
- Stan (todo, doing, done). Zadanie ze stanem doing musi posiadać czas startu oraz przypisanego użytkownika. Zadanie ze stanem done posiada przypisanego użytkownika oraz datę zakończenia
- Data dodania
- Data startu (stan zmieniony na doing)
- Data zakończenia (stan zmieniony na done)
- Użytkownik odpowiedzialny za zadanie (zadanie może wykonywać devops lub developer)

## LAB 4

### Wygląd aplikacji

- Skorzystaj z dowolnej biblioteki CSS/komponentów (przykładowe biblioteki poniżej) do dopracowania UI aplikacji
- Zaimplementuj tryb ciemny/jasny (przełącznik na stronie lub zależny od ustawień przeglądarki)

Przykładowe biblioteki CSS/komponentów:

- Bootstrap
- Tailwind CSS
- Material UI
- Material Web
- PrimeNg
- Ant Design
- Angular Material
- ChakraUI
- KitWind
- TailBlocks
- Tailwindcomponents

## LAB 5

### Powiadomienia

- Zaprojektuj serwis powiadomień w aplikacji.
- Zaimplementuj komponent licznika nieprzeczytanych powiadomień (np. przy imieniu/nazwisku zalogowanej osoby).
- Zaimplementuj widok wszystkich (nawigacja do widoku po kliknięciu w licznik oraz link w menu) oraz pojedynczego powiadomienia
- Wiadomość zostaje oznaczona jako przeczytana po akcji użytkownika (np. "oznacz jako przeczytane") oraz po wejściu na widok szczegółów powiadomienia.
- Zaimplementuj komponent okna dialogowego z powiadomieniami (pokazuje się od razu przy wysłaniu powiadomienia, tylko dla powiadomień o prority 'medium' i 'high')
- Zaimplementuj przykładowe powiadomienia w aplikacji:
  - Utworzono nowy projekt (high, otrzymuje każdy admin)
  - Przypisanie osoby do historyjki/zadania (high)
  - Nowe zadanie w historyjce (medium, otrzymuje właściciel historyjki)
  - Usunięcie zadania z historyjki (medium, otrzymuje właściciel historyjki)
  - Zmiana statusu zadania w historyjce (status zadania done - priorytet medium, status doing - priorytet low, otrzymuje właściciel historyjki)
- Zapamiętaj listę powiadomień

### Model powiadomienia

Powiadomienie posiada:

- tytuł
- treść
- datę utworzenia
- priorytet (low, medium, high)
- flagę "przeczytane"
- id osoby do której jest przesłane powiadomienie

Minimum:

type ISOString = string // lub np. number
type UserID = string
type Notification = {
title: string,
message: string,
date: ISOString,
prority: 'low'|'medium'|'high',
isRead: boolean,
recipientId: UserID
}
