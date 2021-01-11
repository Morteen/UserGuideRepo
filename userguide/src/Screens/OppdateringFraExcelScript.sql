/**
Laget for Tank Management og kjøres i LocusSolutionVTS databasen.

 

Dette skriptet leser inn fra en excel fil, husk å gjøre denne om til CSV og slette tittelrader og tomme rader på toppen
Dette fordi Tank tidvis har supportsaker hvor de ønsker å masse endre navn på tanker gjerne ved årsskifte.
*/
BEGIN TRAN

 

-- Lager en temporær tabell for å kunne lese inn dataene i databasen, denne forsvinner når spørringen stopper
CREATE TABLE #CSVBULK 
(
    testDate NVARCHAR(15) NULL,
    testMonth NVARCHAR(15) NULL,
    oldUnitName NVARCHAR(MAX) NULL,
    newUnitName NVARCHAR(MAX) NULL
)
GO

 

-- Bulker inn / leser inn selve csv fila til databaseobjekt
BULK INSERT #CSVBULK
FROM 'D:\Temp\Oppdatering av Tank ID.csv'
WITH
(
FIELDTERMINATOR = ';'
--,KEEPNULLS
--,ROWTERMINATOR = '\n'
)
GO

 

-- Dette er ikke nødvendig og kan kommenteres ut, men syns det er greit å slette unødvendig data, dropper kolonnene vi ikke har bruk for
ALTER TABLE #CSVBULK DROP COLUMN testDate,testMonth;

 

-- Disse vil ikke bli oppdatert
SELECT oldUnitName
    ,SUBSTRING(newUnitName, 1, (LEN(newUnitName)-1)) newUnitName
FROM #CSVBULK
WHERE oldUnitName NOT IN (SELECT [Name] FROM Unit)
GO

 

-- Disse vil bli oppdatert, husk å verifisere med kunde!
SELECT IMEI, [Name] 
FROM Unit 
WHERE [Name] IN (SELECT oldUnitName FROM #CSVBULK )
GO

 

-- Oppdaterer alle navnene som vi finner treff på
UPDATE Unit SET [Name] = newUnitName FROM #CSVBULK WHERE oldUnitName=[Name]
GO

 

-- Denne kan brukes til å sjekke om det er noen enheter igjen med gammelt navn, denne bør være tom dersom UPDATE har blitt kjørt
SELECT * FROM Unit WHERE [Name] IN (SELECT oldUnitName FROM #CSVBULK )
GO

 

ROLLBACK
--COMMIT