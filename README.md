# MyShop

## Opis projektu

Aplikacja **MyShop React** to prosty sklep internetowy stworzony w React z wykorzystaniem TypeScript oraz Redux do zarządzania stanem.  
Projekt został wygenerowany przy pomocy `create-react-app`.

## Funkcjonalności

- **Nagłówek strony** zawierający tytuł oraz przycisk koszyka, który zmienia kolor, gdy zostaną dodane produkty.
- **Lista produktów** z paginacją, gdzie każdy element zawiera:
  - Zdjęcie,
  - Nazwę,
  - Cenę,
  - Przycisk z ikoną SVG dodający produkt do koszyka.
- **Podgląd produktu** zawierający:
  - Zdjęcie, nazwę, cenę,
  - Dostępną ilość,
  - Opis,
  - Pole do wyboru ilości i przycisk dodawania do koszyka.
- **Koszyk zakupowy** z funkcjami:
  - Wyświetlanie dodanych produktów,
  - Zmiana ilości lub usuwanie produktów,
  - Podsumowanie ceny,
  - Przycisk zakupu (czyści cały koszyk).
- **React-Redux** do zarządzania kolekcją produktów oraz zawartością koszyka.

## Dodatkowe informacje

- Kliknięcie w koszyk otwiera **modal** z jego zawartością.
- Kliknięcie w ikonę podglądu na liście przenosi do **widoku podglądu**.
- **TypeScript** używany w całym projekcie.
- **Skupiono się na React**, a nie na wyglądzie aplikacji.
- Zastosowano składnię **ES6**,
- Wykorzystano metody cyklu życia komponentów,
- Użyto **funkcyjnych** komponentów,
- Użyto **Higher-Order Components**,
- Stworzono Hooki Reacta.

## Instalacja i uruchomienie

Aby uruchomić projekt lokalnie:

1. **Otwórz terminal lub wiersz poleceń**.
2. **Przejdź do katalogu repozytorium**.
3. **Zainstaluj zależności**:
npm install

4. **Uruchom aplikację**:
npm start

Aplikacja będzie dostępna pod adresem **https://shop.local:3000**.

## Konfiguracja hosta

Jeśli pojawi się problem z hostem, trzeba dodać wpis w pliku `hosts`:

### Windows

1. Otwórz **Notatnik jako administrator**.
2. Otwórz plik:  
`C:\Windows\System32\drivers\etc\hosts`

3. Dodaj na końcu:
127.0.0.1 shop.local



### Linux / Mac

1. Otwórz terminal.
2. Edytuj plik `/etc/hosts`:
sudo nano /etc/hosts

3. Dodaj na końcu:
127.0.0.1 shop.local


4. Zapisz zmiany (`Ctrl + X`, potem `Y` i `Enter`).
5. Zrestartuj przeglądarkę lub wyczyść DNS (`sudo dscacheutil -flushcache` na Mac).

Po tych zmianach aplikacja powinna być dostępna pod adresem [https://shop.local:3000](https://shop.local:3000).