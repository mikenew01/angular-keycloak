import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'key-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['name', 'email', 'update', 'delete'];
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
      { id: '1', name: 'Usuário 1', email: 'usuario1@gmail.com' },
      { id: '2', name: 'Usuário 2', email: 'usuario2gmail.com' },
      { id: '3', name: 'Usuário 3', email: 'usuario3@gmail.com' },
      { id: '4', name: 'Usuário 4', email: 'usuario4@gmail.com' },
    ] ;

    this.changeDetectorRefs.detectChanges();
  }


  public redirectToDelete(id: string): void {
    let url: string = `/users/delete/${id}`;
    this.router.navigate([url]);
  }


  public redirectToUpdate(id: string): void {
    let url: string = `/users/update/${id}`;
    this.router.navigate([url]);
  }

  public hasRole(role: string): boolean {
    return this.authService.userHasRole(role);
  }

}
