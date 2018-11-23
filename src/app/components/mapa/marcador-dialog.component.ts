import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormGroup } from "@angular/forms";

interface DialogData {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: "app-marcador-dialog",
  templateUrl: "./marcador-dialog.component.html",
  styles: [
    `
      .example-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }

      .example-full-width {
        width: 100%;
      }
    `
  ]
})
export class MarcadorDialogComponent implements OnInit {
  public marcadorData: DialogData;
  public form:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MarcadorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public formBuilder: FormBuilder
  ) {
    this.marcadorData = data;
    this.form = formBuilder.group({
      "titulo": data.titulo,
      "descripcion": data.descripcion
    });
  }

  ngOnInit() {}

  public confirmar() {
    this.dialogRef.close(this.form.value);
  }

  public cancelar() {
    this.dialogRef.close();
  }
}
