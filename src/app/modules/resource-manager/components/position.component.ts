import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogService } from '@shared/services/dialog.service';
import { SkillsetModel } from '@core/models/skillset.interface';
import { PositionModel } from '@core/models/position.interface';

@Component({
    selector: 'position',
    templateUrl: '../templates/template1/views/position.component.html'
})
export class PositionComponent implements OnInit {

    skillSetForm: FormGroup;
    positionForm: FormGroup;
    skillset: SkillsetModel[];
    displayedColumns: string[] = ['name', 'experiance', 'mandatory', 'description', 'actions'];
    constructor(private fb: FormBuilder, private dialog: MatDialog,
        private dialogService: DialogService) {
        this.createPositionForm();
    }

    ngOnInit() {
        this.fillSkillset();
    }

    onCancel(){
        
    }

    createPositionForm() {
        this.positionForm = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
            code: ['', [Validators.required, Validators.maxLength(10)]],
            description: [''],
            yearsOfExperiance: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: []
        });
    }

    createSkillsetForm() {
        this.skillSetForm = this.fb.group({
            name: ['', Validators.required],
            experiance: ['', Validators.required],
            required: [true]
        });
    }

    openAlert() {
        this.dialogService.openAlert({
            title: 'Alert',
            message: `Alert text`,
            closeButton: 'Close'
        }).afterClosed().subscribe(result => {
            console.log('alert closed');
        })
    }

    openConfirmationModal(skillset: SkillsetModel) {
        this.dialogService.openConfirm({
            title: 'Delete Confirmation',
            message: `Do you wish to delete <b>${skillset.name}</b>?`,
            acceptButton: 'OK',
            cancelButton: 'CANCEL',
            disableClose: false,
            autoFocus: true
        }).afterClosed().subscribe(result => {
            if (result) {
                console.log('Dialog was closed');
                console.log(result);
                //Do required deletes and other functionality here
            };
        });
    }



    loadPositions() {
        //         displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
        //   dataSource = ELEMENT_DATA;
    }

    fillSkillset() {
        this.skillset = [
            { id: 0, name: 'Angular', experiance: 10, mandatory: true, description: '' },
            { id: 0, name: 'Java', experiance: 10, mandatory: true, description: '' },
            { id: 0, name: 'Spring Boot', experiance: 10, mandatory: true, description: '' },
            { id: 0, name: 'AWS', experiance: 10, mandatory: true, description: '' }
        ]
    }

    savePosition(positionModel:PositionModel, isValid:boolean){
        debugger;
        console.log(positionModel,{});
    }

    editSkillset(skillset: SkillsetModel) {
        console.log(skillset, {});
    }

    deleteSkillset(skillset: SkillsetModel) {
        this.openConfirmationModal(skillset);
    }
}