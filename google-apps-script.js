// =====================================================
// INSTRUCCIONES:
// 1. Crear una Google Sheet nueva (nombre sugerido: "Drimian - Diagnósticos Web")
// 2. Ir a Extensiones > Apps Script
// 3. Pegar TODO este código (reemplazar lo que haya)
// 4. Guardar (Ctrl+S)
// 5. Desplegar > Nueva implementación > Aplicación web
//    - Ejecutar como: Yo
//    - Quién tiene acceso: Cualquier persona
// 6. Copiar la URL del deploy
// 7. Pegar esa URL en js/diagnostic.js donde dice GOOGLE_SCRIPT_URL
// =====================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Crear headers si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'ID Sesión',
        'P1 Ciclos decisión',
        'P2 Señal',
        'P3 Fricción',
        'P4 Miedo',
        'P5 Atractores',
        'P6 Compensación',
        'P7 Holgura',
        'P8 Op/Innovación',
        'P9 IA',
        'P10 Aprendizaje',
        'Score Total',
        'Perfil',
        'Diferenciación',
        'Margen',
        'Clientes vuelven',
        'Talento',
        'Cap. invertir',
        'Resiliencia',
        'Opcionalidad',
        'Palanca 1',
        'Palanca 2',
        'Palanca 3',
        'Nombre',
        'Empresa',
        'Email',
        'WhatsApp',
        'Fuente'
      ]);
      // Formato header
      sheet.getRange(1, 1, 1, 29).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Si es envío de diagnóstico (sin contacto)
    if (data.type === 'diagnostic') {
      sheet.appendRow([
        new Date().toISOString(),
        data.sessionId || '',
        data.answers[0] || '',
        data.answers[1] || '',
        data.answers[2] || '',
        data.answers[3] || '',
        data.answers[4] || '',
        data.answers[5] || '',
        data.answers[6] || '',
        data.answers[7] || '',
        data.answers[8] || '',
        data.answers[9] || '',
        data.totalScore || '',
        data.profile || '',
        data.indicators['Diferenciación defendible'] || '',
        data.indicators['Margen'] || '',
        data.indicators['Clientes que vuelven'] || '',
        data.indicators['Talento que quiere estar'] || '',
        data.indicators['Capacidad de invertir'] || '',
        data.indicators['Resiliencia'] || '',
        data.indicators['Opcionalidad'] || '',
        data.palancas[0] || '',
        data.palancas[1] || '',
        data.palancas[2] || '',
        '', '', '', '',
        data.source || 'web'
      ]);
    }

    // Si es envío de contacto (actualizar fila existente)
    if (data.type === 'contact') {
      var rows = sheet.getDataRange().getValues();
      var targetRow = -1;

      // Buscar la fila con el mismo sessionId
      for (var i = rows.length - 1; i >= 1; i--) {
        if (rows[i][1] === data.sessionId) {
          targetRow = i + 1; // +1 porque getValues es 0-indexed, sheet es 1-indexed
          break;
        }
      }

      if (targetRow > 0) {
        // Actualizar columnas de contacto (25-28: Nombre, Empresa, Email, WhatsApp)
        sheet.getRange(targetRow, 25).setValue(data.name || '');
        sheet.getRange(targetRow, 26).setValue(data.company || '');
        sheet.getRange(targetRow, 27).setValue(data.email || '');
        sheet.getRange(targetRow, 28).setValue(data.whatsapp || '');
      } else {
        // Si no encontró la fila (raro), crear una nueva con todo
        sheet.appendRow([
          new Date().toISOString(),
          data.sessionId || '',
          '', '', '', '', '', '', '', '', '', '',
          '', '', '', '', '', '', '', '', '',
          '', '', '',
          data.name || '',
          data.company || '',
          data.email || '',
          data.whatsapp || '',
          'contact-only'
        ]);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Necesario para que funcione como web app
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Drimian diagnostic webhook active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
