import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'key-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'update', 'delete'];
  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private changeDetectorRefs: ChangeDetectorRef,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getItens();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getItens() {
    this.dataSource.data = [
      { id: '1', name: 'item 1'},
      { id: '2', name: 'item 2'},
      { id: '3', name: 'item 3'},
      { id: '4', name: 'item 4'},
      { id: '5', name: 'item 5'},
      { id: '6', name: 'item 6'},
    ] ;

    this.changeDetectorRefs.detectChanges();
  }


  public redirectToDelete(id: string): void {
    let url: string = `/items/delete/${id}`;
    this.router.navigate([url]);
  }


  public redirectToUpdate(id: string): void {
    let url: string = `/items/update/${id}`;
    this.router.navigate([url]);
  }

  public hasRole(role: string): boolean {
    return this.authService.userHasRole(role);
  }
}
