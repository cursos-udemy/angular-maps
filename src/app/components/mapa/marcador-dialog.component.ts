import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

interface DialogData {
  titulo: string;
  descripcion: string;
}

@Component({
  selector: "app-marcador-dialog",
  templateUrl: "./marcador-dialog.component.html",
  styles: []
})
export class MarcadorDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MarcadorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data);
    
  }

  ngOnInit() {}
}
